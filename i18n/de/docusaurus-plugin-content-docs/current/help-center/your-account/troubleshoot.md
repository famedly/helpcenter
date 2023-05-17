---
sidebar_label: Troubleshoot
title: Troubleshoot
hide_title: true
displayed_sidebar: helpcenterSidebar
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="hero hero--primary">
  <div class="container">
    <h2 class="hero__title">Troubleshoot & Reset</h2>
    <h3>Sometimes, things don't work as intended. Read on to learn how to reset Famedly.</h3>
  </div>
</div>

##

:::warning

Resetting your app or browser cache will log you out of any active Famedly account. Make sure you have your login information and the passphrase handy so you can sign back in and get access to the chat backup after resetting!

:::

## Reset in Browser

### Chrome
- Open the Developer Tools using  `cmd + option + i` for Mac, or `ctrl + shift + i` for Windows.
- Keep the Developer Tools console open, and right click the refresh button on the top.
- Select `Empty Cache and Hard Reload`.
- Navigate to `Application`, and expand the Cookies on the left hand side.
- Right click on the Famedly link and press `Clear`.

### Safari
- Open the `Safari menu` in your system menu bar, and select `Preferences`.
- In the `Privacy` section, select `Manage Website Data`.
- Search for "Famedly," select it, and then click `Remove All`.

### Firefox
- To the left of the URL, click the `🔒` icon.
- Click `Clear Cookies and Site Data`.
- Click `Remove`.

### Microsoft Edge
- Open the Developer Tools using  `cmd + option + i` for Mac, or `ctrl + shift + i` for Windows.
- Keep the Developer Tools console open, and right click the refresh button on the top.
- Select `Empty Cache and Hard Reload`.
- Navigate to `Application`, and expand the Cookies on the left hand side.
- Right click on the Famedly link and press `Clear`.

### Recording HAR files
HAR is an archive file format that record information about your session using software. When trying to troubleshoot a problem in Famedly, it can sometimes be helpful to record and share a HAR file with our support.

- [Chrome instructions](https://support.google.com/admanager/answer/10358597?hl=en)
- [Firefox instructions](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#opening-the-network-monitor)
- [Safari instructions](https://developer.apple.com/safari/tools/#current)
- [Edge instructions](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/network/)
