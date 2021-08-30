const list = [
    "app/src/root/game/file1.cpp",
    "app/src/root/game/file2.cpp",
    "app/src/root/tool/file3.cpp",
    "app/src/root/file4.cpp",
    "app/data/file5.cpp",
    "pom.xml"
]

class OneDArray {
    constructor(list) {
        this.list = list;
    }

    print() {
        const pathsList = this.list.map((path) => {
            return path.split("/");
        });

        let lastPathsList = [];
        for (let paths of pathsList) {
            const printablePaths = paths.map((path, i) => {
                let newPath = ` --> ${path}`;
                if (lastPathsList[i] && path === lastPathsList[i]) {
                    newPath = " ".repeat(newPath.length);
                }
                return newPath;
            });

            console.log(`${printablePaths.join("")}`);
            lastPathsList = paths;
        }
    }
}

new OneDArray(list).print(); 