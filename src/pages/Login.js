export function Login(){
	const handleSubmit = (event) => {
		event.preventDefault()

		const email = event.target.email.value
		const password = event.target.password.value
	}

	return(
		<div className="container">
			<h3 className="header col s12 light center">Login</h3>
			<form className="col s12" onSubmit={handleSubmit}>
				<div className="row">
					<div className="input-field col s12 l6 offset-l3">
						<input id="email" type="email" name="email" className="validate"/>
						<label htmlFor="email">Email</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12 l6  offset-l3">
						<input id="password" type="password" name="password" className="validate"/>
						<label htmlFor="password">Senha</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12 l12 center">
						<button className="btn waves-effect waves-light brown" type="submit" name="action">Cadastrar
							<i className="material-icons right">send</i>
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}