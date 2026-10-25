# TV Remote (front door)

Bookmark this page. It checks whether the TV answers over Wi-Fi:

- **Yes:** it opens the full remote on the TV.
- **No:** it helps get the TV back on Wi-Fi over Bluetooth: **Connect to the TV**, then **Turn on the TV's Wi-Fi**
  (it wakes the TV first if it's in standby). Once connected it asks the TV over Bluetooth whether it's on Wi-Fi and at
  which address, so a changed IP is picked up too, and opens the full remote there by itself.

The remote opens over http unless this phone trusts the TV's https certificate; the TV's own page moves trusted phones
to https by itself.

Hosted here so it opens over any internet connection, even when the TV is off Wi-Fi. Bluetooth needs a Web Bluetooth
browser: [Bluefy](https://apps.apple.com/app/bluefy-web-ble-browser/id1492822055) on iPhone, Chrome on Android. Only
phones already paired with the TV can send commands (pairing needs a code confirmed on the TV with its remote).
Add `?stay=1` to stay on this page.
