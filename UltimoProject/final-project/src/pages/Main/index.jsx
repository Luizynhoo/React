import React, { useState, useCallback, use } from "react";
import { FaGithub, FaPlus, FaSpinner, FaLink, FaTrash } from "react-icons/fa"
import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";

import { getRepository } from "../../services/githubService";

export default function Main() {

    const [NewRepository, setNewRepository] = useState('');
    const [Repository, setRepository] = useState([]);
    const [Loading, setLoading] = useState(false);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        try {

            setLoading(true);

            const data = await getRepository(NewRepository);
            setRepository([...Repository, data]);
            setNewRepository('');
        } catch (error) {
            alert(error.message);

        } finally {
            setLoading(false);
        }


    }, [NewRepository, Repository]);

    function handleinputChange(e) {
        setNewRepository(e.target.value);
    }

    const handleDelete = useCallback((repo) => {
        const find = Repository.filter(r => r.name !== repo);
        setRepository(find);
    }, [Repository])


    return (
        <Container>
            <h1>
                <FaGithub size={45} />
                Meus Repositorios
            </h1>


            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Adicionar Repositorio"
                    value={NewRepository}
                    onChange={handleinputChange}
                />

                <SubmitButton Loading= {Loading ? 1 : 0}>
                    {
                        Loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (
                            <FaPlus color="#FFF" size={14} />
                        )
                    }
                </SubmitButton>
            </Form>

            <List>
                {Repository.map(repo => (
                    <li key={repo.name}>
                        <span>
                            <DeleteButton onClick = {() => handleDelete(repo.name)}>
                                <FaTrash size={14} />
                            </DeleteButton>

                            {repo.name}
                        </span>

                        <a href="">
                            <FaLink size={20} />
                        </a>
                    </li>
                ))}
            </List>
        </Container>
    )
}