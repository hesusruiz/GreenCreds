import translations from "./translations.json"

export function T(key) {
    if ((window.preferredLanguage === "en") && (key.charAt(0) != "$")) { return key }

    let entry = translations[key]
    if (entry === undefined) { return key }
    let translated = entry[window.preferredLanguage]
    if (translated === undefined) { return key }
    return translated
}
