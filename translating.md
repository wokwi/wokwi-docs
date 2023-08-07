# Steps for Translating Wokwi Docs

Contributed by [Anderson Costa](https://github.com/arcostasi).

## Install git on your console or any other GUI tool that supports the steps below.

1. Fork the Wokwi docs repository on GitHub: (https://github.com/wokwi/wokwi-docs).

2. Clone your repository to your local machine:
   (e.g. `git clone https://github.com/<your-github-account>/wokwi-docs`).

3. Add an upstream remote:
   (e.g. `git remote add upstream https://github.com/wokwi/wokwi-docs/`).

4. Fetch all branches from the upstream remote:
   (e.g. `git fetch upstream`).

5. Checkout the main branch (`git checkout main`).

6. Rebase the main branch to incorporate updates from the upstream remote
   (e.g. `git rebase upstream/main`).

   If necessary, force a push to your own Github repository
   (e.g. `git push -f origin main`).

7. Create a new branch for your updates (e.g. git branch `pt-br#01`).

8. Checkout the new branch (e.g. git checkout `pt-br#01`).

9. Make changes to the translation files inside the folder
   (./wokwi-docs/i18n/<yourLocale>/docusaurus-plugin-content-docs/current/).
   (e.g. ./wokwi-docs/i18n/pt-BR/docusaurus-plugin-content-docs/current/)

10. Add the changed files
    (e.g. `git add file1 file2`, or `git add .` for all changes).

11. Commit the changes with a descriptive message
    (e.g. `git commit -m "feat(i18n): update pt-BR texts"`).

12. Push the changes to your remote repository
    (e.g. `git push --set-upstream origin pt-br#01`).

13. Create a pull request from your repository to the official Wokwi docs repository
    (https://github.com/wokwi/wokwi-docs/).

14. Wait for the checks to pass and for approval from the administrator "urish".
    Note: If an error message appears, wait for a response from the administrator.
