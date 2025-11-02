import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Owner, Loading, BackButton, IssuesList } from "./styles";
import { getRepositoryDetails } from "../../services/githubService";
import { FaArrowLeft, FaSpinner } from "react-icons/fa";

export default function Repositorio() {
    const { repositorio } = useParams();
    const [page, setPage] = useState(1);
    const [repository, setRepository] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const data = await getRepositoryDetails(repositorio, 5, page);
                setRepository(data.repository);
                setIssues(data.issues);
                setLoading(false);

            } catch (error) {
                console.error(error);
            }
        }

        load();
    }, [repositorio])


    if (loading) {
        return (
            <Loading loading={loading}>
                <FaSpinner color="#FFF" size={30} />
            </Loading>
        )
    }

    return (
        <Container>
            <BackButton to="/">
                <FaArrowLeft color="#fff" size={30} />
            </BackButton>

            <Owner>
                <img
                    src={repository.owner.avatar_url}
                    alt={repository.owner.login}
                />

                <h1>{repository.name}</h1>
                <p>{repository.description}</p>
            </Owner>

            <IssuesList>
                {issues.map(issue => (
                    <li key={String(issue.id)}>
                        <img
                            src={issue.user.avatar_url}
                            alt={issue.user.login} 
                        />

                        <div>
                            <strong>
                                <a href={issue.html_url}>{issue.title}</a>
                                {issue.labels.map(label =>(
                                    <span key={String(label.id)}>{label.name}</span>
                                ))}
                            </strong>
                            <p>{issue.user.login}</p>
                        </div>
                    </li>
                ))}
            </IssuesList>
        </Container>
    )
}