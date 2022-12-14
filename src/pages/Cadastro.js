import React, { useEffect, useState } from "react"
import M from "materialize-css"

export function Cadastro(){
	useEffect(() => {
		let datepickerElements = document.querySelectorAll(".datepicker")
		M.Datepicker.init(datepickerElements, {
			format: 'dd-mmmm-yyyy',
			maxDate: new Date()
		})

		M.AutoInit(document.body)
		return () => {}
	},[])

	const [, setVal] = useState([1900, 2022]);
	const updateRange = (e, data) => {
		setVal(data);
	};

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return(
		<div className="container">
			<h3 className="header col s12 light center">Cadastre-se!</h3>
			<h5 className="col s12 light center">Se torne parte da nossa comunidade</h5>
			<form className="col s12" onSubmit={handleSubmit}>
				<div className="row">
					<div className="input-field col s6 l6">
						<input id="first_name" type="text" name="first_name" className="validate"/>
						<label htmlFor="first_name">Nome</label>
					</div>
					<div className="input-field col s6 l6">
						<input id="last_name" type="text" name="last_name" className="validate"/>
						<label htmlFor="last_name">Sobrenome</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6 l6">
						<input id="password" type="password" name="password" className="validate"/>
						<label htmlFor="password">Senha</label>
					</div>
					<div className="input-field col s6 l6">
						<input id="repeat_password" type="password" name="repeat_password" className="validate"/>
						<label htmlFor="repeat_password">Repetir senha</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6 l6">
						<input id="email" type="email" name="email" className="validate"/>
						<label htmlFor="email">Email</label>
					</div>
					<div className="input-field col s6 l6">
						<input type="text" className="datepicker" id="dataNascimento" name="dataNascimento"/>
						<label htmlFor="dataNascimento">Data de Nascimento</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6 l6">
						<input id="cellphone" type="tel" name="tel" className="validate" pattern="[0-9]{9}"/>
						<label htmlFor="cellphone">Telefone</label>
					</div>
					<div className="input-field col s6 l6">
						<select defaultValue={'DEFAULT'} name="country">
							<option value="DEFAULT" disabled>Pa??s atual</option>
							<option value="BR">Brasil</option>
							<option value="US">Estados Unidos</option>
							<option value="OT">Outro</option>
						</select>
						<label>Localidade</label>
					</div>
				</div>
				<div className="row">
					<h5 className="header col s12 light center">G??neros favoritos</h5>
					<div className="input-field col s4 l4">
						<p><label><input type="checkbox"/><span>Rock</span></label></p>
						<p><label><input type="checkbox"/><span>Pop</span></label></p>
					</div>
					<div className="input-field col s4 l4">
						<p><label><input type="checkbox"/><span>Sertanejo</span></label></p>
						<p><label><input type="checkbox"/><span>Pagode</span></label></p>
					</div>
					<div className="input-field col s4 l4">
						<p><label><input type="checkbox"/><span>Cl??ssica</span></label></p>
						<p><label><input type="checkbox"/><span>Indie</span></label></p>
					</div>
				</div>
				<div className="row">
					<label htmlFor="years-interest">??poca favorita</label>
					<div className="input-field col s12 l12">
						<input type="range" id="years-interest" min="1900" max="2022" onChange={updateRange}/>
					</div>
				</div>
				<div className="row">
					<h5 className="header col s12 light center">Op????es de m??sica estrangeira</h5>
					<div className="input-field col s4 l4">
						<p><label><input name="musEstr" type="radio"/><span>Apenas m??sica nacional</span></label></p>
					</div>
					<div className="input-field col s4 l4">
						<p><label><input name="musEstr" type="radio"/><span>Apenas m??sica Estrangeira</span></label></p>
					</div>
					<div className="input-field col s4 l4">
						<p><label><input name="musEstr" type="radio" defaultChecked/><span>Todas as m??sicas</span></label></p>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12 l12">
						<div className="center switch">
							<label>
								<input type="checkbox" name="aceite"/>
								<span className="lever"></span>
								Aceito os termos de aceite e pol??ticas de privacidade
							</label>
						</div>
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