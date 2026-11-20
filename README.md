# gta6-clipper-01 — Speed entry: "Speed's GTA 6 Character Gets Flattened on a Vice City Street"

make.fun bounty entry: a vertical GTA 6 Short built from IShowSpeed's GTA 6
launch livestream. The clip rides the launch-week hype — Speed is the
biggest GTA 6 streamer — and ends on the moment everyone shares: his
character flattened by an SUV with the GET UP prompt on screen. Places go by
the video's YouTube views; the top 20 share $500.

## The video

The moment comes from IShowSpeed's GTA 6 launch VOD
(https://www.youtube.com/watch?v=qSyo5d-dVzA, "PLAYING GTA 6 EARLY ACCESS
GAMEPLAY GET IN HERE!", 64.6M views). I cut VOD 26:04–26:24: Speed's
character flees a cop on foot through a Vice City intersection, weaves
between two trucks, and is flattened by a white SUV. The GET UP prompt pops
up as the SUV rolls past.

**The clip (1080x1920, 20 s, 60 fps, a YouTube Short):**
- 0–2.5 s: hook text "SPEED GETS FLATTENED IN GTA 6" over the chase.
- 0–14 s: the chase, centre-cropped to vertical, stream chrome cropped out
  (no facecam, chat, minimap or HUD) so it plays as pure gameplay.
- 14–16 s: "Make clips like this with AI"
- 16–18 s: "and earn money on make.fun"
- 18–20 s: "make.fun/bounty/gta6-clipper-01"
- Audio: the VOD's own audio (game + Speed reacting), faded out over the
  last second.
- Verified from the render: frames at 1/15/19 s show the hook text, the
  pitch banner, and the GET UP prompt under the bounty URL; the file is
  1080x1920, 60 fps, 20.0 s.

The rendered clip is `clip/gta6-speed-short.mp4` in the build workspace
(`~/workspace/makefun/gta6-clipper-01/speed/`); it is uploaded to YouTube
through the Simular Box (no upload access from the build machine).

## YouTube upload

- Title: `Speed's GTA 6 Character Gets Flattened on a Vice City Street`
- Description:

```
IShowSpeed's GTA 6 character gets flattened on a Vice City street — welcome to Leonida.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-bookcase-globe-fawn
My make.fun referral code: zak4nd90

#GTA6 #GTA6Shorts #Shorts #ViceCity #RockstarGames
```

## The program

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the
repository root, checks it parses as a JSON object holding a non-empty
string `url`, and copies it unchanged into the output directory. It takes no
network and no arguments. Run it as the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` currently holds a placeholder Shorts address; it is updated to
the real published URL right after the upload, before submission.
