import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto'

const PropsContactos = ({props}) => {
  return (
    <div>
      <h2>Nombre: {props.nombre }</h2>
      <h2>apellido: {props.apellido}</h2>
      <h3>email: {props.email}</h3>
      <h4>Conectado: {props.conectado ? 'Contacto en Linea' : 'Contacto no disponible'}</h4>
    </div>
  )
}

PropsContactos.propTypes = {
    props: PropTypes.instanceOf(Contacto)
}

export default PropsContactos;

