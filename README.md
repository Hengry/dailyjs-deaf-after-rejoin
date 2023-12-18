# Issue

User cannot hear the sound from others after the user rejoin(`join` -> `leave` -> `join`) the call with microphone muted.

Note the issue only happens on specific devices.

## Known devices with the issue

- IPhone SE2 with IOS 16.5.1
- IPhone 12mini with IOS 16.1.1

## Reproducing steps

1. Start with `device A`, press startCamera for the permissions request.
2. (`device A`) Agree with permissions.
3. (`device A`) Join the call.
4. (`device A`) Turn on the microphone by tap the button `Mic On`.
5. Next, use `device B`, press startCamera for the permissions request.
6. (`device B`) Agree with permissions.
7. (`device B`) Join the call.
8. Now, speak something in `device A`. It should be hearable at `device B`.
9. (`device B`) Leave the call.
10. (`device B`) Join the call again.
11. **_ Now, speak something in `device A`. It would be NOT hearable at `device B`. _**
12. (`device B`) Tap on `Mic On` and then `Mic Off`.
13. Now, speak something in `device A`. It would be hearable at `device B` again.
