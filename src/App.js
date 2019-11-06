import React, { Component } from 'react';
import './App.css';
import './newJob.js';

class App extends Component {
  constructor() {
    super();
    
    

    

    this.state = {
      painelVisible: false,
      invisiblePainel:false
    }

    this.actionBarRight = this.actionBarRight.bind(this)
    this.actionBarOut = this.actionBarOut.bind(this)
  }

  render() {
    return (
      <div className="jobposition">
        <div>
          <header className="topo">
            <h2 class="bannerTittle">Job Finder</h2>

          </header>
        </div>

        <input type={"description"} placeholder={"Nome da vaga..."} value={ this.state.searchText } 
                    onChange={ this.searchTextChanged } />
        {/*empresa da vaga */}

        <br/>
       
        <select value={this.state.nivel} onChange={this.nivelChanged} >
          {/*nivel da vaga*/}
            <option
            value="jovemAprendiz">jovem aprendiz</option>
            <option
            value="estagio">estagio</option>
            <option
            value="trainee">trainee</option>
            <option 
            value="superior">superior</option>
          </select>

          &nbsp;
        <select value={ this.state.location } 
                    onChange={ this.locationChanged }>
          {/*local da vaga*/}
          <option
            value="AC">Acre</option>
          <option
            value="AL">Alagoas</option>
          <option
            value="AP">Amapá</option>
          <option
            value="AM">Amazonas</option>
          <option
            value="BA">Bahia</option>
          <option
            value="CE">Ceará</option>
          <option
            value="DF">Distrito Federal</option>
          <option
            value="ES">Espírito Santo</option>
          <option
            value="GO">Goiás</option>
          <option
            value="MA">Maranhão</option>
          <option
            value="MT">Mato Grosso</option>
          <option
            value="MS">Mato Grosso do Sul</option>
          <option
            value="MG">Minas gerais</option>
          <option
            value="PA">Pará</option>
          <option
            value="PB">Paraíba</option>
          <option
            value="PR">Paraná</option>
          <option
            value="PE">Pernambuco</option>
          <option
            value="PI">Piauí</option>
          <option
            value="RJ">Rio de Janeiro</option>
          <option
            value="RN">Rio Grande do Norte</option>
          <option
            value="RS">Rio Grande do Sul</option>
          <option
            value="RO">Rondônia</option>
          <option
            value="RR">Roraima</option>
          <option
            value="SC">Santa Catarina</option>
          <option
            value="SP">São Paulo</option>
          <option
            value="SE">Sergipe</option>
          <option
            value="TO">Tocantis</option>

        </select>
        &nbsp;
        <button onClick={this._busca} className="search">Pesquisar</button>
        <div className="listagem">
               
            </div>

        


        <a onClick={this.actionBarRight} className="plusbutton">+</a>
        

        {
          this.state.painelVisible &&
         <div> 
          <div className="barRight">
          <h1>adicione uma nova vaga</h1>
          <input type={"add"} placeholder={"Nome da vaga..."} value={ this.state.searchText }></input>
          <p/>
          escolha o nivel da vaga
          <p/>
          <select value={this.state.nivel }>
            <option
            value="jovemAprendiz">jovem aprendiz</option>
            <option
            value="estagio">estagio</option>
            <option
            value="trainee">trainee</option>
            <option 
            value="superior">superior</option>
          </select>
          <p/>
          escolha o estado da vaga
          <p/>
          <select value={ this.state.location }>
          <option
            value="AC">Acre</option>
          <option
            value="AL">Alagoas</option>
          <option
            value="AP">Amapá</option>
          <option
            value="AM">Amazonas</option>
          <option
            value="BA">Bahia</option>
          <option
            value="CE">Ceará</option>
          <option
            value="DF">Distrito Federal</option>
          <option
            value="ES">Espírito Santo</option>
          <option
            value="GO">Goiás</option>
          <option
            value="MA">Maranhão</option>
          <option
            value="MT">Mato Grosso</option>
          <option
            value="MS">Mato Grosso do Sul</option>
          <option
            value="MG">Minas gerais</option>
          <option
            value="PA">Pará</option>
          <option
            value="PB">Paraíba</option>
          <option
            value="PR">Paraná</option>
          <option
            value="PE">Pernambuco</option>
          <option
            value="PI">Piauí</option>
          <option
            value="RJ">Rio de Janeiro</option>
          <option
            value="RN">Rio Grande do Norte</option>
          <option
            value="RS">Rio Grande do Sul</option>
          <option
            value="RO">Rondônia</option>
          <option
            value="RR">Roraima</option>
          <option
            value="SC">Santa Catarina</option>
          <option
            value="SP">São Paulo</option>
          <option
            value="SE">Sergipe</option>
          <option
            value="TO">Tocantis</option>

        </select>
          
        
          <p/>

          <button onClick={this.addJob} className="jobAdd">adicionar</button>
          </div>
          <div onClick={this.actionBarOut} className="invisible"></div>
          </div>
        }
        

      </div>
    );
  }
  actionBarOut() {
    this.setState({
      painelVisible: false
    })
  }
  actionBarRight() {
    this.setState({
      painelVisible: true
      
    })

  }
}

export default App;
