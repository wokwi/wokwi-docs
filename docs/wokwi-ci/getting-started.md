---
title: Wokwi for CI and GitHub Actions
sidebar_label: Introduction
---

Wokwi provides a robust simulation solution for automated testing of your embedded firmware on CI systems like [GitHub Actions](./github-actions), GitLab CI, and others. You can use Wokwi to run your tests on every commit, and get instant feedback on your code changes.

Behind the scenes, Wokwi CI uses the same simulation engine that powers the [Wokwi Simulator](https://wokwi.com). The simulation runs in the cloud, and you can stream the serial output back to your CI system to verify that your firmware behaves as expected.

## Wokwi in the Loop (WITL)

Wokwi in the Loop (WITL) is a testing methodology that combines the best of both worlds: the speed and convenience of unit testing with the realism of hardware testing. With WITL, you can run your firmware on a simulated hardware platform, interact with the firmware using virtual buttons and sensors, and verify the firmware's behavior by checking the serial output.

For basic testing scenarios, you can use the [Wokwi CLI](./cli-installation) to run your firmware on your local machine or CI system. The CLI allows you to start the simulation, check the serial output, and fail the test if the output does not match the expected value.

For more advanced testing scenarios, you can write [automation scenarios](./automation-scenarios) that automate the simulation, push buttons, change the state of the sensors, and check the serial output.

:::warning
Wokwi CI is free while in beta. After the beta, we will charge based on the number of minutes your tests run on Wokwi CI. We plan to offer a free tier with a limited number of minutes per month.
:::

## CI Architecture

Wokwi CI is powered a simulation server that runs in the cloud. The server receives your firmware binary, simulates it, and streams the serial output back to your CI system. The server is stateless and can run multiple simulations in parallel.

Wokwi does not store your firmware, and it is deleted from the cloud server after the simulation is finished. If you do not want to upload your firmware to the cloud, please contact us to discuss options for on-premise deployment of Wokwi CI.

## Next Steps

- [Install the Wokwi CLI](./cli-installation) to run your firmware on your local machine or CI system.
- [Write automation scenarios](./automation-scenarios) to automate the simulation and test your firmware.
- [Use Wokwi with GitHub Actions](./github-actions) to run your tests on every commit.
- [Check out the example projects](./github-actions#examples) that are set up to run on Wokwi CI.
- [Join the Wokwi Discord server](https://wokwi.com/discord) to get help and share your projects with the community.
