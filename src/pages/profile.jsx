import React from "react";
import ProfilePic from '../assets/anamaria.png'; 
import NavBar from '../components/nav_bar'

export const ProfilePage = () => {
    return (
        <div className='page'>
        <NavBar />
            <div className='profile'>
            <div className='title-profile'>Perfil</div>
                <div className='profile-header'>
                    <img src={ProfilePic} alt="Profile" className='profile-pic' />
                    <div className='name'>Ana María de las Mercedes</div>
                </div>

                <div className='profile-stats'>
                    <div className='stat'>
                        <label>Promedio Acumulado</label>
                        <span>71</span>
                    </div>
                    <div className='stat'>
                        <label>Semestres de experiencia</label>
                        <span>3</span>
                    </div>
                </div>

                <div className='motivation'>
                    <label>Motivación</label>
                    <p>Debería ser ayudante de este ramo porque tengo un sólido dominio del tema y la capacidad para facilitar el aprendizaje de mis compañeros</p>
                </div>

                <div className='courses'>
                    <label>Asignaturas a las que está postulando este período</label>
                    <ul>
                        <li>Estructuras discretas</li>
                        <li>Estructuras de datos</li>
                    </ul>
                </div>

                <div className='current-courses'>
                    <label>Cursos vigentes</label>
                    <ul>
                        <li>Herramientas generales</li>
                        <li>Herramientas para Ayudantes De Aula</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}