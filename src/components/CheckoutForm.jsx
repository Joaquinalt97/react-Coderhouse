import { useState } from "react";

export default function CheckoutForm(props) {
    const [formData, setFormData] = useState(
        {
            username: "",
            email: "",
            phone: "",
        }
    );

    function handleSubmit(event) {
        event.preventDefault();
        props.handleCheckout(formData)
        alert(`Gracias ${formData.username}! Tus datos fueron enviados correctamente`);
        
    }

    function handleChance(event) {
        const inputName = event.target.name;
        const value = event.target.value;

        const newFormData = {...formData};
        newFormData[inputName] = value;
        setFormData(newFormData)
    }


    return (
        <>
            <style>{`
                section {
                    max-width: 500px;
                    margin: 20px auto;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    font-family: Arial, sans-serif;
                }

                form h4 {
                    margin-bottom: 15px;
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: white;
                    text-align: center;
                }

                form div {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                label {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: white;
                    display: flex;
                    flex-direction: column;
                }

                input {
                    margin-top: 5px;
                    padding: 10px;
                    border: 1px solid #bbb;
                    border-radius: 8px;
                    font-size: 1rem;
                    transition: border-color 0.2s ease;
                }

                input:focus {
                    border-color: #0077ff;
                    outline: none;
                    box-shadow: 0 0 4px #0077ff55;
                }

                button {
                    margin-top: 20px;
                    width: 100%;
                    padding: 12px;
                    background-color: #0077ff;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background 0.2s ease;
                }

                button:hover {
                    background-color: #005fcc;
                }
            `}</style>

            <section>
                <form onSubmit={handleSubmit}>
                    <h4>Ingresa tus datos personales</h4>
                    <div>
                        <label>Nombre
                            <input value={formData.username} onChange={handleChance} name="username" required type="text" placeholder="Nombre" />
                        </label>
                        <label>Email
                            <input value={formData.email} onChange={handleChance} name="email" required type="email" placeholder="email@email" />
                        </label>
                        <label>Telefono
                            <input value={formData.phone} onChange={handleChance} name="phone" type="tel" placeholder="54011999999" />
                        </label>
                    </div>
                    <button type="submit">Confirmar</button>
                </form>
            </section>
        </>
    );
}
