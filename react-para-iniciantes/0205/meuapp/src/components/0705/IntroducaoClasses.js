import React from "react";

class Produtos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ contar: state.contar + 1 }));
  }

  componentDidMount() {
    console.log("Montou agora");
  }

  componentDidUpdate() {
    document.title = this.state.contar;
  }

  componentWillMount() {
    console.log("Saiu da tela");
  }

  render() {
    return (
      <div>
        <h2>Componente feito com classe</h2>
        <strong>
          {this.props.titulo} : {this.state.contar}
        </strong>
        <div>
          <button onClick={this.handleClick}>+</button>
        </div>
      </div>
    );
  }
}

function IntroducaoClasses() {
  return (
    <div>
      <h1>Manutenção de codigos - Classes</h1>

      <Produtos titulo="Esse é meu titulo" />
    </div>
  );
}

export default IntroducaoClasses;
