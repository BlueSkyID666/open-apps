## What ElevenLabs does, and what an alternative has to match

ElevenLabs is a hosted voice platform: text-to-speech, voice cloning from a sample, dubbing into other languages and speech-to-text, sold by usage. An open-source alternative has to do the same work on hardware you control — and here the application licence is only half the answer. The model weights these apps download carry their own licences, and those decide whether you may sell what you make.

## How to choose

| | [VoiceStudio](/apps/voicestudio/) | [Voicebox](/apps/voicebox/) |
|---|---|---|
| Platforms | macOS, Windows, Linux | macOS, Windows; Linux from source |
| App licence | AGPL-3.0 | MIT |
| Default model licence | OmniVoice weights, CC-BY-NC | Mostly MIT or Apache-2.0 engines |
| Video dubbing | Yes | No |
| Dictation | Yes | Yes |
| Agent access | Local API and MCP | Built-in MCP server |

- **Personal or research use, widest feature set?** VoiceStudio.
- **Audio you will sell or publish commercially?** Voicebox, or VoiceStudio with a non-default engine whose licence allows it.
- **Voices for your coding agents?** Either; Voicebox binds a voice to each MCP client.

## Not listed and why

- **OmniVoice** (k2-fsa) is the speech model VoiceStudio uses by default, not a desktop app.
- **Forks and mirrors** of VoiceStudio under the VoiceStudio or OmniVoice Studio names are left out in favour of the canonical repository.
- **Smaller voice studios** that describe themselves as ElevenLabs alternatives but have a few dozen stars or no release join when they ship one.

For speech-to-text only, see [open-source Wispr Flow alternatives](/collections/open-source-wispr-flow-alternatives/). More audio and video software is under [Media](/categories/media/).
