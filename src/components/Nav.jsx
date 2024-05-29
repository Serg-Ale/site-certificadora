import { Link } from "react-router-dom";
import "./styles/Nav.css";

const Nav = () => {
  return (
    <aside>
      <nav>
        <h3>Fundamentos de Algoritmos</h3>
        <ul>
          <li>
            <Link to="/fundamentos/conceitos-basicos">
              Introdução à Linguagem C e Conceitos Básicos de Algoritmos
            </Link>
          </li>
          <li>
            <Link to="/fundamentos/variaveis">
              Constantes, Variáveis e Tipos de Dados
            </Link>
          </li>
          <li>
            <Link to="/fundamentos/expressoes">
              Expressões Aritméticas, Relacionais e Lógicas
            </Link>
          </li>
          <li>
            <Link to="/fundamentos/entrada-saida">
              Comandos de Entrada e Saída
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Estruturas de Decisão</h3>
        <ul>
          <li>
            <Link>Place-Holder</Link>
          </li>

          <li>
            <Link>Place-Holder</Link>
          </li>
          <li>
            <Link>Place-Holder</Link>
          </li>
          <li>
            <Link>Place-Holder</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Estruturas de Repetição</h3>
        <ul>
          <li>
            <Link>Place-Holder</Link>
          </li>
          <li>
            <Link>Place-Holder</Link>
          </li>
          <li>
            <Link>Place-Holder</Link>
          </li>
          <li>
            <Link>Place-Holder</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Tecnicas de modularização</h3>
        <ul>
          <li>
            <Link to="/tecnicas-modularizacao/funcoes-procedimentos">
              Introdução a Procedimentos e Funções em C
            </Link>
          </li>
          <li>
            <Link to="tecnicas-modularizacao/recursividade">
              Modularização Avançada e Reutilização de Código
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Variáveis compostas Homogeneas</h3>
        <ul>
          <li>
            <Link to="/var-comp-homogeneas/introducao-vetores">
              Introdução a Vetores em C
            </Link>
          </li>

          <li>
            <Link to="/var-comp-homogeneas/manipulacao-vetores">
              Manipulação de Vetores em C
            </Link>
          </li>

          <li>
            <Link to="/var-comp-homogeneas/introducao-matrizes">
              Introdução a Matrizes em C
            </Link>
          </li>

          <li>
            <Link to="/var-comp-homogeneas/manipulacao-matrizes">
              Manipulação de Matrizes em C
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Variáveis compostas Heterogêneas</h3>
        <ul>
          <li>
            <Link to="var-comp-heterogeneas/introducao-structs">
              Introdução às Structs
            </Link>
          </li>

          <li>
            <Link to="var-comp-heterogeneas/arrays-structs">
              Arrays de Structs
            </Link>
          </li>

          <li>
            <Link to="var-comp-heterogeneas/structs-param-funcoes">
              Structs como Parâmetros de Funções
            </Link>
          </li>

          <li>
            <Link to="var-comp-heterogeneas/structs-exercicios">
              Exercícios - Structs
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
