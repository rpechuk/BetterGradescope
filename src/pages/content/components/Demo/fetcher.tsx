import dataStorage from "@root/src/shared/storages/dataStorage";
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