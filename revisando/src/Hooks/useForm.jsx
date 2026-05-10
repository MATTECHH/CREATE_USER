import { useReducer, useRef, useState } from "react";

export const useForm = (url) => {
    const initalState = {
        status: ""
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "Escrevendo":
                return {...state, status: "Escrevendo"}
            case "Parou":
                return {...state, status: "Parou"}
            case "Enviando":
                return {...state, status: "Enviando..."}
            case "Sucesso":
                return {...state, status: "Enviado"}
            default:
                return state
        }
    }

    const[state, dispatch] = useReducer(
        reducer,
        initalState
    )
    const nametime = useRef(null)

    const {status} = state

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const onName = (e) => {
        setName(e.target.value)

        dispatch({
            type: "Escrevendo"
        })

        clearTimeout(nametime.current)

        nametime.current = setTimeout(() => {
            dispatch(
                {type: "Parou"}
            )
        }, 1000);
    };

    const onEmail = (e) => {
        setEmail(e.target.value)

        dispatch({
            type: "Escrevendo"
        })

        clearTimeout(nametime.current)

        nametime.current = setTimeout(() => {
            dispatch(
                {type: "Parou"}
            )
        }, 1000);
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        clearTimeout(nametime.current)

        dispatch({
            type: "Enviando"
        })

        nametime.current =  setTimeout(() => {
            dispatch(
                {
                    type: "Sucesso"
                }
            )
        }, 1000);

        const add = {
            name,
            email
        };

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(add)
            });

            await res.json();

            setName("")
            setEmail("")
        } catch (e) {
            console.error(e);
        }
    };

    return {
        status,
        onName,
        onEmail,
        handleSubmit,
        name,
        email
    }
}