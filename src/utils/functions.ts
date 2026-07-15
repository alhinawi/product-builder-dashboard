export function txtSlicer(txt: string, limit: number) {
    return txt.length > limit ? txt.substring(0, limit) + "..." : txt;
}