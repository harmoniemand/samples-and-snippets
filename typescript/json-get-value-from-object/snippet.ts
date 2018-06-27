
export class Snippet {
    static GetValue(obj: any, path: string, casesensitive: boolean = true): any {
        try {
            if (obj == null || path == null) {
                return null;
            }

            if (path.indexOf('.') > -1) {
                return this.GetValue(
                    obj[path.substring(0, path.indexOf('.'))],
                    path.substring(path.indexOf('.') + 1)
                );
            } else {
                
                if (casesensitive === true) {
                    return obj[path];
                }

                let value = null;

                Object.keys(obj).forEach(key => {
                    if (key.toLowerCase() == path.toLowerCase()) {
                        value = obj[key];
                    }
                });

                return value;
            }
        } catch (ex) {
            console.error(ex);
        }
    }
}