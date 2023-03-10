// this modal is rendered by ShowTrip

import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import TripForm from '../shared/TripForm'
import messages from '../shared/AutoDismissAlert/messages'

const EditTripModal = (props) => {
    // destructure props
    const { user, show, handleClose, updateTrip, msgAlert, triggerRefresh } = props

    const [trip, setTrip] = useState(props.trip)

    const onChange = (e) => {
        e.persist()
        
        setTrip(prevTrip => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            const updatedTrip = {
                [updatedName] : updatedValue
            }

            return {
                ...prevTrip, ...updatedTrip
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        updateTrip(user, trip)
            // closes modal
            .then(() => handleClose())
            // success message
            .then(() => {
                msgAlert({
                    heading: 'Trip added',
                    message: messages.updateTripSuccess,
                    variant: 'success'
                })
            })
            // refresh the Show Page
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() => {
                msgAlert({
                    heading: 'Oh No!',
                    message: messages.updateTripFailure,
                    variant: 'danger'
                })
            })

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <TripForm 
                    trip={trip} 
                    handleChange={onChange} 
                    handleSubmit={onSubmit} 
                    heading="Update Trip"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditTripModal