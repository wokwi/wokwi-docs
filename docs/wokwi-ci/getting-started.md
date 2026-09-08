---

title: Wokwi for Continuous Integration, GitHub Actions, and Automated Firmware Testing
sidebar_label: Introduction
description: Integrate Wokwi into modern CI/CD workflows to automate embedded-firmware compilation, simulation, behavioral verification, and regression testing using the Wokwi CLI, GitHub Actions, GitLab CI, automation scenarios, and MCP.
keywords: [Wokwi CI, Wokwi, continuous integration, continuous delivery, embedded firmware testing, firmware verification, GitHub Actions, GitLab CI, hardware simulation, automated testing, Wokwi CLI, WITL, automation scenarios, serial output, Model Context Protocol, MCP, AI-assisted development, embedded systems, CI/CD]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Wokwi provides a **software-based hardware simulation environment** for developing, executing, and testing embedded firmware without requiring physical hardware for every development or validation cycle. Its simulation capabilities can be incorporated into continuous integration (CI) systems such as [GitHub Actions](./github-actions), GitLab CI, and other automated development environments.

This makes it possible to move embedded-system validation closer to the conventional software-development lifecycle. Instead of relying exclusively on manual testing with physical development boards, teams can repeatedly compile firmware, execute it within a simulated hardware environment, reproduce hardware interactions, inspect runtime output, and detect regressions automatically.

Wokwi CI is based on the same simulation technology used by the [Wokwi Simulator](https://wokwi.com). In a CI workflow, firmware is executed against a simulated representation of the target hardware. The simulation can produce serial output that is made available to the testing environment, allowing software-based checks to determine whether the firmware behaves as expected.

The result is a workflow in which **firmware compilation, simulation, interaction, and behavioral verification** can become repeatable automated operations.

## Why Hardware Simulation Matters in CI

Embedded development traditionally depends on physical microcontrollers, sensors, displays, communication devices, and other electronic components. Physical testing remains important, but using hardware for every software change can introduce additional setup, availability, and reproducibility requirements.

Simulation provides a complementary testing layer.

A firmware change can be tested through a sequence such as:

```text
Source-code modification
        ↓
Firmware compilation
        ↓
Simulated hardware initialization
        ↓
Firmware execution
        ↓
Hardware interaction
        ↓
Serial / observable output
        ↓
Automated verification
        ↓
Pass or fail
```

This approach is especially valuable for **early regression detection**. A software change that unintentionally modifies firmware behavior can be detected automatically before the change is deployed to physical hardware.

Simulation does not eliminate the need for real-device testing. Instead, it provides an additional validation layer that can be executed frequently and consistently.

## Wokwi in the Loop (WITL)

**Wokwi in the Loop (WITL)** is a methodology for testing actual embedded firmware in a simulated hardware environment.

It occupies a useful position between conventional software tests and physical hardware tests:

```text
Software Unit Tests
       ↓
Wokwi in the Loop
       ↓
Physical Hardware Testing
```

Unit tests primarily validate software logic. Physical hardware tests validate firmware against actual electronics. WITL introduces a simulated hardware layer in which the firmware itself can execute and interact with virtual hardware.

A WITL test can involve:

* A simulated microcontroller.
* Virtual input devices.
* Simulated sensors.
* Displays and indicators.
* Buttons and switches.
* Firmware-generated serial output.
* Programmatically controlled hardware states.

For example:

```text
Virtual button pressed
        ↓
Firmware detects input
        ↓
Application logic executes
        ↓
LED state changes
        ↓
Serial message generated
        ↓
Expected message verified
```

This allows the test to evaluate a complete firmware interaction rather than checking only an isolated function.

## Wokwi Simulator

The **Wokwi Simulator** is primarily useful during interactive development.

A developer can construct a simulated circuit, execute firmware, observe the behavior of components, modify the program, and repeat the process without immediately deploying every change to a physical board.

This makes the simulator particularly useful for:

**Development → experimentation → debugging → initial validation**

The same general simulation environment can then be incorporated into automated workflows through the Wokwi CLI and CI platforms.

See the [Wokwi Simulator](https://wokwi.com) for the interactive development environment.

## Wokwi CLI

The **Wokwi CLI** provides command-line access to Wokwi simulations.

A command-line interface is particularly useful when simulation needs to become part of an automated process because a CI runner can execute commands without requiring a graphical desktop environment.

Typical uses include:

* Starting simulations.
* Running firmware in automated environments.
* Monitoring serial output.
* Applying simulation timeouts.
* Integrating simulation into CI pipelines.
* Returning a result that can be interpreted by automation.

For example:

```bash
wokwi-cli --timeout 10000
```

The `--timeout` option can be used to constrain the maximum execution duration of a simulation. A value of `10000` represents 10,000 milliseconds, or 10 seconds.

For exact command-line options and syntax, refer to the [Wokwi CLI documentation](./cli-usage).

## CI Architecture

Wokwi CI follows a cloud-based simulation architecture.

A simplified execution model is:

```text
CI Runner
   │
   │ Firmware / test execution request
   ▼
Wokwi Simulation Infrastructure
   │
   │ Firmware executes on simulated hardware
   ▼
Virtual Microcontroller + Peripherals
   │
   │ Runtime output
   ▼
Serial Output / Test Result
   │
   ▼
CI Runner
   │
   ▼
Pass / Fail
```

The simulation infrastructure executes the firmware in a virtual hardware environment and provides output back to the CI system.

Wokwi describes its CI simulation infrastructure as **stateless**, and simulations can be executed concurrently. This allows CI systems to execute independent simulations without requiring a dedicated physical development board for every parallel test.

### Firmware Handling

According to Wokwi's CI documentation, firmware uploaded for simulation is not retained after the simulation has completed.

For organizations that cannot send firmware to a cloud-hosted simulation service because of security, privacy, intellectual-property, or infrastructure policies, Wokwi provides a route for discussing **on-premises deployment requirements**.

Organizations should evaluate their own security and compliance requirements before incorporating cloud simulation into a production development pipeline.

## GitHub Actions

**GitHub Actions** provides workflow automation directly within GitHub repositories.

Wokwi can be incorporated into a GitHub Actions pipeline so firmware simulation becomes part of the repository's automated checks.

A typical sequence is:

```text
Git push / Pull Request
        ↓
GitHub Actions
        ↓
Build firmware
        ↓
Run Wokwi simulation
        ↓
Check behavior
        ↓
Workflow result
```

A basic workflow may look like:

```yaml
name: Wokwi CI

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Build firmware
        run: |
          # Replace with the project's actual build command.
          make

      - name: Run Wokwi simulation
        run: |
          wokwi-cli --timeout 10000
        env:
          WOKWI_CLI_TOKEN: ${{ secrets.WOKWI_CLI_TOKEN }}
```

The example deliberately leaves the build command project-specific because Arduino CLI, PlatformIO, CMake, Make, and other embedded-development systems use different build procedures.

### GitHub Actions Secrets

Authentication information should not be hard-coded into a workflow.

GitHub Actions provides **Secrets** for storing credentials separately from repository source code.

A Wokwi authentication token can therefore be exposed to the workflow through a secret such as:

```yaml
env:
  WOKWI_CLI_TOKEN: ${{ secrets.WOKWI_CLI_TOKEN }}
```

The repository itself does not need to contain the token.

For GitHub Actions workflow syntax, expressions, secrets, events, jobs, and runners, see the [GitHub Actions documentation](https://docs.github.com/actions).

## Pull-Request Validation

A major benefit of CI is that the same test can run automatically whenever proposed changes are submitted.

For example:

```text
Developer modifies firmware
        ↓
Pull request created
        ↓
GitHub Actions starts
        ↓
Firmware compiled
        ↓
Wokwi simulation executed
        ↓
Automated checks performed
        ↓
      ┌─────────┐
      │  PASS   │ → Continue review
      └─────────┘

      ┌─────────┐
      │  FAIL   │ → Investigate change
      └─────────┘
```

This provides rapid feedback before firmware changes are merged.

CI therefore changes firmware testing from a primarily manual activity into a **repeatable repository-level quality check**.

## GitLab CI

GitLab provides its own CI/CD system based on pipeline configuration.

Wokwi can similarly be integrated into a GitLab-based workflow through command-line execution.

A conceptual pipeline is:

```text
GitLab repository
       ↓
GitLab CI pipeline
       ↓
Build firmware
       ↓
Wokwi CLI
       ↓
Simulated hardware
       ↓
Verification
       ↓
Pipeline status
```

A simple GitLab CI configuration can follow the same principle:

```yaml
stages:
  - build
  - test

build:
  stage: build
  script:
    - make

wokwi:
  stage: test
  script:
    - wokwi-cli --timeout 10000
```

The exact runner image, authentication mechanism, build process, and Wokwi invocation should be adapted to the project's environment.

For pipeline syntax and CI/CD configuration, see the [GitLab CI/CD documentation](https://docs.gitlab.com/ee/ci/).

## Automation Scenarios

Basic CI testing may be sufficient when the principal requirement is to execute firmware and inspect its output.

More advanced validation requires **interaction with the simulated hardware**.

Wokwi automation scenarios provide a mechanism for controlling the simulation and reproducing specific hardware events.

Examples include:

```text
Button interaction
Sensor-state modification
Peripheral interaction
Firmware event
Serial-output verification
```

Consider a temperature-monitoring application:

```text
Simulated temperature = 25°C
              ↓
Firmware reads sensor
              ↓
Firmware evaluates threshold
              ↓
Display is updated
              ↓
Serial result is generated
              ↓
Automation verifies expected result
```

The ability to control inputs makes automation scenarios useful for **behavioral testing**, particularly where firmware behavior depends on external hardware conditions.

See the [Automation Scenarios documentation](./automation-scenarios) for implementation details.

## Serial Output and Behavioral Verification

Serial output can provide a straightforward observable interface for testing embedded firmware.

For example:

```text
System initialized
Sensor initialized
Temperature: 25
Threshold: 30
Fan: OFF
Test passed
```

A CI system can use this output to determine whether the simulation reached an expected state.

The important distinction is between:

```text
Simulation completed
```

and:

```text
Firmware behaved correctly
```

A simulation finishing successfully does not necessarily prove that the application logic is correct. Stronger CI tests should verify meaningful behavior wherever practical.

For example, a test could check that:

* A sensor value is read.
* An input is recognized.
* A threshold condition is handled.
* An output device changes state.
* An expected serial message is produced.

This transforms simulation from simple execution into **behavioral verification**.

## Simulation Time and Usage Limits

Wokwi CI usage is based on simulation time.

The documentation supplied for this project specifies the following monthly allowances:

| Wokwi plan | Simulation allowance |
| ---------- | -------------------: |
| Free       |           50 minutes |
| Hobby      |          200 minutes |
| Hobby+     |          200 minutes |
| Pro        |        2,000 minutes |

Simulation time is calculated from the simulation time consumed by tests in the CI workflow.

Because simulation is a finite resource, test design should avoid unnecessarily long executions.

### Timeout Control

A simulation can be restricted using:

```bash
wokwi-cli --timeout 10000
```

A 10-second timeout can be useful for a test that is expected to complete quickly.

Longer simulations should use an appropriately larger limit.

For production documentation, plan limits and pricing should be checked against the current [Wokwi Pricing page](https://wokwi.com/pricing), because commercial plans and quotas may change.

## AI Agent Integration

The Wokwi CLI includes experimental support for the **Model Context Protocol (MCP)**.

MCP is an open protocol intended to provide a standardized way for compatible AI applications to interact with external tools and data sources.

Within an embedded-development environment, Wokwi's MCP capabilities can connect an AI agent with simulation functionality.

A conceptual workflow is:

```text
AI Agent
    ↓
MCP interface
    ↓
Wokwi simulation
    ↓
Firmware execution
    ↓
Simulated hardware interaction
    ↓
Serial / simulation results
    ↓
AI analysis
```

This creates possibilities for AI-assisted activities such as:

* Running firmware tests.
* Investigating simulation failures.
* Interacting with simulated hardware.
* Examining runtime output.
* Iteratively modifying and re-testing firmware.

MCP should be considered separately from CI systems. **GitHub Actions and GitLab CI automate development pipelines; MCP provides an interoperability layer through which compatible AI clients can interact with tools.**

For the protocol specification and concepts, see the [Model Context Protocol documentation](https://modelcontextprotocol.io/).

## Tool Selection by Development Stage

Different Wokwi-related technologies serve different purposes.

| Development activity            | Suitable technology  |
| ------------------------------- | -------------------- |
| Interactive circuit development | Wokwi Simulator      |
| Local simulation                | Wokwi CLI            |
| GitHub repository automation    | GitHub Actions       |
| GitLab repository automation    | GitLab CI            |
| Hardware interaction testing    | Automation Scenarios |
| Runtime behavior inspection     | Serial Output        |
| AI-assisted interaction         | MCP                  |
| Physical validation             | Real hardware        |

Using these tools according to their intended role creates a layered testing strategy rather than forcing one technology to perform every task.

## End-to-End Embedded CI Workflow

A complete workflow can combine these technologies:

```text
             Developer
                 │
                 ▼
        Firmware Development
                 │
                 ▼
        Wokwi Simulator
      Interactive validation
                 │
                 ▼
          Source Repository
                 │
        ┌────────┴────────┐
        ▼                 ▼
 GitHub Actions       GitLab CI
        │                 │
        └────────┬────────┘
                 ▼
          Firmware Build
                 │
                 ▼
             Wokwi CLI
                 │
                 ▼
      Simulated Hardware
                 │
                 ▼
       Automation Scenario
                 │
                 ▼
          Serial Output
                 │
                 ▼
       Automated Verification
                 │
          ┌──────┴──────┐
          ▼             ▼
        PASS           FAIL
          │             │
          ▼             ▼
       Continue      Investigate
```

This architecture demonstrates how embedded testing can be distributed across development, simulation, automation, CI/CD, and AI-assisted environments.

## Advantages of Wokwi-Based CI

Integrating Wokwi into CI provides several practical advantages.

### Repeatability

The same simulation configuration can be executed repeatedly, reducing variations that can occur when tests are performed manually.

### Early Regression Detection

Firmware changes can be tested before they reach physical hardware or production environments.

### Reduced Hardware Dependency

Developers do not necessarily need access to a physical development board for every software iteration.

### Automated Validation

Tests can execute as part of a CI pipeline rather than depending on a developer to remember to perform them manually.

### Parallel Execution

A cloud-based, stateless simulation infrastructure can support multiple independent simulations, making automated testing more scalable.

### Hardware-Oriented Testing

Unlike tests that examine only software functions, WITL can validate firmware behavior in relation to simulated hardware.

## Limitations and Considerations

Simulation is a testing layer, not a universal replacement for physical-device validation.

A simulated environment does not automatically guarantee that firmware will behave identically on every physical device under every real-world condition.

Physical validation may still be necessary for factors such as:

* Electrical characteristics.
* Physical manufacturing variation.
* Timing behavior that depends on actual hardware.
* Analog behavior.
* Power consumption.
* Electromagnetic effects.
* Peripheral characteristics not represented by the simulation.

A mature embedded testing strategy can therefore use simulation and physical hardware **together**, rather than treating them as mutually exclusive approaches.

## Recommended Testing Strategy

A practical embedded-development pipeline can use several testing layers:

```text
Layer 1 — Source-level testing
        ↓
Layer 2 — Firmware compilation
        ↓
Layer 3 — Wokwi simulation
        ↓
Layer 4 — Automated hardware interaction
        ↓
Layer 5 — Physical hardware validation
        ↓
Layer 6 — Release / deployment
```

The earlier layers can provide rapid feedback, while later layers provide additional confidence in real-world operation.

## Security and Credential Management

Authentication credentials used by CI systems should be treated as sensitive information.

Recommended practices include:

* Store credentials in the CI platform's secret-management facility.
* Do not commit tokens to source control.
* Restrict access to production credentials.
* Use separate credentials where appropriate for development and production environments.
* Review CI logs to ensure secrets are not accidentally printed.
* Evaluate whether cloud simulation is appropriate for proprietary firmware.

For GitHub repositories, GitHub Actions Secrets provide a mechanism for supplying credentials to workflows without hard-coding them into repository files.

## Example Use Case: Automated Sensor Testing

Consider a firmware application that reads a virtual sensor and activates an output when a threshold is exceeded.

A test could perform the following sequence:

```text
Initial sensor value
       ↓
Firmware reads sensor
       ↓
Threshold evaluated
       ↓
Sensor value changed
       ↓
Firmware responds
       ↓
Output state verified
       ↓
Serial output checked
```

The same test can be repeated automatically for multiple input values.

For example:

```text
20°C → Fan OFF
25°C → Fan OFF
30°C → Fan ON
35°C → Fan ON
```

This type of scenario demonstrates why simulation can be useful for firmware regression testing: the same sequence of inputs can be reproduced consistently after future code changes.

## Recommended Workflow

A complete Wokwi-based CI process can therefore be organized as follows:

1. **Develop** the embedded firmware.
2. **Construct** or configure the simulated hardware environment.
3. **Compile** the firmware.
4. **Execute** the firmware using Wokwi.
5. **Interact** with simulated peripherals where required.
6. **Capture** serial or other observable output.
7. **Compare** results with expected behavior.
8. **Report** success or failure to the CI system.
9. **Perform physical-device testing** when the project requires hardware-level validation.
10. **Deploy** only after the required validation stages succeed.

This establishes firmware verification as a continuous part of the software-development lifecycle.

## Next Steps

* [Install the Wokwi CLI](./cli-installation) to run simulations locally or in CI environments.
* [Use Wokwi with GitHub Actions](./github-actions) to automate firmware validation in GitHub repositories.
* [Create automation scenarios](./automation-scenarios) to reproduce hardware interactions.
* [Explore the Wokwi CLI](./cli-usage) for command-line simulation and test execution.
* [Configure MCP support](./mcp-support) for compatible AI-agent workflows.
* [Explore example projects](./github-actions#examples) for practical CI configurations.
* [Join the Wokwi Discord server](https://wokwi.com/discord) for community support and technical discussion.

## Sources and References

The following sources provide the technical background and platform-specific information used to structure this documentation:

### Wokwi Documentation

**Wokwi CI / Continuous Integration**
https://docs.wokwi.com/

Covers Wokwi CI, Wokwi in the Loop, cloud simulation, simulation limits, the Wokwi CLI, automation scenarios, GitHub Actions, and MCP integration.

**Wokwi Simulator**
https://wokwi.com/

Provides the interactive browser-based environment for simulating embedded hardware and firmware.

**Wokwi Pricing**
https://wokwi.com/pricing

Provides subscription information and simulation-time allowances. Plan limits should be checked against the current page before publication.

### GitHub Documentation

**GitHub Actions Documentation**
https://docs.github.com/actions

Documents GitHub Actions workflows, events, jobs, runners, actions, expressions, and repository secrets.

**GitHub Actions Workflow Syntax**
https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions

Describes the YAML syntax used to define GitHub Actions workflows.

### GitLab Documentation

**GitLab CI/CD Documentation**
https://docs.gitlab.com/ee/ci/

Documents GitLab pipelines, jobs, stages, runners, variables, and CI/CD configuration.

### Model Context Protocol

**Model Context Protocol Documentation**
https://modelcontextprotocol.io/

Provides documentation for MCP, including its architecture, concepts, and interoperability model for AI applications and external tools.

## Conclusion

Wokwi extends embedded development by providing a programmable simulated hardware environment that can be incorporated into modern software-engineering workflows.

The **Wokwi Simulator** supports interactive development, the **Wokwi CLI** enables command-line execution, **GitHub Actions and GitLab CI** provide automated pipeline integration, **automation scenarios** enable hardware-interaction testing, **serial output** provides observable firmware behavior, and **MCP** creates an interface for compatible AI-assisted workflows.

Used together with physical-device testing where necessary, these technologies can establish a **repeatable, automated, and scalable validation pipeline for embedded firmware**.
