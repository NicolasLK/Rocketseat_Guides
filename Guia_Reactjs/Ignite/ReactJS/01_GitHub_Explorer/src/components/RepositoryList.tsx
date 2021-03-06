import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss"
import { useState, useEffect } from "react";

interface Repository {
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])
    const url = "https://api.github.com/orgs/rocketseat/repos"

    useEffect(() => {
        try {
            fetch(url)
            .then(res => res.json())
            .then(data => setRepositories(data))
        } catch (e) {
            console.log(e)
        }
    }, [])


    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}