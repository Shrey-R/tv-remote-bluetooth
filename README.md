# TV Remote (front door)

Bookmark this page. It checks whether the TV answers over Wi-Fi:

- **Yes:** it opens the full remote on the TV.
- **No:** tap **Connect to the TV** (Bluetooth; browsers need that one tap) and the rest is automatic: it asks the
  TV whether it's on Wi-Fi and at which address (a changed IP is picked up), wakes it if it's in standby, turns its
  Wi-Fi on, waits until it answers, then opens the full remote. Power and Screensaver buttons work over Bluetooth too.

The remote opens over http unless this phone trusts the TV's https certificate; the TV's own page moves trusted phones
to https by itself.

Hosted here so it opens over any internet connection, even when the TV is off Wi-Fi. Bluetooth needs a Web Bluetooth
browser: [Bluefy](https://apps.apple.com/app/bluefy-web-ble-browser/id1492822055) on iPhone, Chrome on Android. Only
phones already paired with the TV can send commands (pairing needs a code confirmed on the TV with its remote).
Add `?stay=1` to stay on this page.
