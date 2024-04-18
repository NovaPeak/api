export function slugify(name: string, id: number): string {
    const sluggedName = name
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
    if (id == 1) {
        return sluggedName;
    }
    return `${sluggedName}-${id - 1}`
}