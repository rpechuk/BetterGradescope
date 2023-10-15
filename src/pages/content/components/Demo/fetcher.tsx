import dataStorage from "@root/src/shared/storages/dataStorage";

console.log(document)

dataStorage.set({
    quarter: [
        {
            class: [
                {
                    name: 'test1',
                    href: 'test',
                    assignments: [
                        {
                            name: 'test',
                            href: 'test',
                            dueDate: 'test',
                            submitted: false,
                            points: 0,
                            totalPoints: 0,
                        },
                    ],
                },
            ],
        },
    ],
});

chrome.storage.local.get('gradescope-user-info', (data) => {
    console.log(data);
});