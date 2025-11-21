# Society Logos

Images from the assets folder have been copied here. Current mapping:

- `images-4.png` → Saturnalia (🎭 fallback)
- `images-3.jpeg` → Food Festival (🍕 fallback)
- `45298983.png` → IEEE (⚡ fallback)
- `images-5.png` → ISTE (🔬 fallback)
- `1722854995324.jpeg` → Microsoft Learn (💻 fallback)
- `images-6.png` → ACM (💡 fallback)

## Available Images:
- `1722854995324.jpeg`
- `45298983.png`
- `images-3.jpeg`
- `images-4.png`
- `images-5.png`
- `images-6.png`
- `logo-CWLFsJqz.png`

## To Update Mapping:
Edit the `societies` array in `src/pages/dashboard/SocietyDashboard.tsx` and `societiesData` in `src/pages/dashboard/SocietyDetails.tsx` to change which image file is used for each society.

## Image Requirements:
- Supported formats: PNG, JPG, JPEG
- Recommended size: 400x200px or larger (will be scaled down)
- Aspect ratio: 2:1 (width:height) works best

If images fail to load, the system will automatically display emoji fallbacks.

