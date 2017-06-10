import React, { Component } from "react"

class Contacto extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nombre: '',
			email: '',
			donacion: '',
			mensaje: ''
		}

		this.blurInput = this.blurInput.bind(this);
		this.controlledInput = this.controlledInput.bind(this);
		this.focusInput = this.focusInput.bind(this);
		this.submit = this.submit.bind(this);
	}

	controlledInput(event) {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	focusInput() {
		const value = this._uncontrolledInput.value;
		this._uncontrolledInput.value = value.replace(",", "");
	}

	blurInput() {
		const value = this._uncontrolledInput.value;
		this._uncontrolledInput.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		this.setState({
			donacion: this._uncontrolledInput.value
		})
	}

	submit() {
		console.log(this.state);
	}

	render () {
		return (
			<div className="contacto-container">
				<h1>Forulario de contacto</h1>
				<form>
					<input
						id="nombre"
						value={this.state.nombre}
						placeholder="Ingrese su nombre"
						onChange={this.controlledInput}
						type="text" />
					<input
						id="email"
						value={this.state.email}
						placeholder="Ingrese su email"
						onChange={this.controlledInput}
						type="text" />
					<input
						ref={(ref) => this._uncontrolledInput = ref}
						placeholder="Ingrese monto donacion"
						onFocus={this.focusInput}
						onBlur={this.blurInput}
						type="text" />
					<textarea
						id="mensaje"
						value={this.state.mensaje}
						placeholder="Ingrese su mensaje..."
						onChange={this.controlledInput}></textarea>
					<button
						type="button"
						className="button"
						onClick={this.submit}>Enviar</button>
				</form>
			</div>
		)
	}
}

export default Contacto
