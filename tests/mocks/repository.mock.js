const faker = require('faker');

/* Mocking JSON
* https://next.json-generator.com/V1NzOZoHq
*
*
* */

export const repositoryMock = {
    getRepositories: () => {
        return [
            {
                id: 0,
                name: "Repo 0",
                fullName: "user/repo0",
                ownerId: 1,
                ownerLogin: "user",
                htmlUrl: "https://github.com/user/repo0",
                description: "Nisi ut elit ex ipsum quis duis cupidatat incididunt ea voluptate.",
                watchersCount: 53,
                forksCount: 89,
                openIssuesCount: 8,
                defaultBranch: "main",
                language: "Golang"
            },
            {
                id: 1,
                name: "Repo 1",
                fullName: "user/repo1",
                ownerId: 1,
                ownerLogin: "user",
                htmlUrl: "https://github.com/user/repo1",
                description: "In sit nostrud amet qui labore consectetur incididunt anim eiusmod dolor irure exercitation.",
                watchersCount: 38,
                forksCount: 19,
                openIssuesCount: 5,
                defaultBranch: "main",
                language: "Golang"
            },
            {
                id: 2,
                name: "Repo 2",
                fullName: "user/repo2",
                ownerId: 1,
                ownerLogin: "user",
                htmlUrl: "https://github.com/user/repo2",
                description: "Officia sit non non aliquip minim mollit enim laborum veniam.",
                watchersCount: 87,
                forksCount: 10,
                openIssuesCount: 100,
                defaultBranch: "main",
                language: "Java"
            }
        ]
    },

    getRepository: () => {
        return {
            id: 0,
            name: "Repo 0",
            fullName: "user/repo0",
            ownerId: 1,
            ownerLogin: "user",
            htmlUrl: "https://github.com/user/repo0",
            description: "Nisi ut elit ex ipsum quis duis cupidatat incididunt ea voluptate.",
            watchersCount: 53,
            forksCount: 89,
            openIssuesCount: 8,
            defaultBranch: "main",
            language: "Golang"
        }
    }
}