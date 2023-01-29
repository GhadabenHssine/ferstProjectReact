import style from "./App.module.css";

import { Navbar, Container, Nav, Form } from "react-bootstrap";
import Logo from "../src/img/logo.png";
import reactVidio from "../src/img/What Is React React js & Why Is It So Popular.mkv"
import singlepVidio from "../src/img/React Introduction.mkv"
import codeReact from "../src/img/communityIcon_4g1uo0kd87c61.png"
import spa from "../src/img/dn463786.wasson_figure2_hires(en-us,msdn.10).png"
import utiliser from "../src/img/rdTeXr5.png"
import node from "../src/img/node.png"
import npx from "../src/img/npx.png"
import result from "../src/img/resultat.png"
import res from "../src/img/Capture.PNG"
import npmreact from "../src/img/npmreact.jpeg"
import dep from "../src/img/Capture2.PNG"
import vdom from "../src/img/vdom.png"
import vdomvidio from "../src/img/3 - ( React Js Tutorial ) Virtual DOM and how it works - -- ما هى الدوم الوهمية وكيفيه عملها.mkv"
function App() {
  return (
    <div className="App">



      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#"><img src={Logo} alt="logo" className={style.logo} /><span className={style.react}>React</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className={style.link} id={style.int}> REACT JS Introduction</Nav.Link>
              <Nav.Link href="#action2" className={style.link}>JSX and React Components</Nav.Link>

              <Nav.Link href="#action1" className={style.link}>  React State</Nav.Link>
              <Nav.Link href="#action2" className={style.link}>React Hooks</Nav.Link>
              <Nav.Link href="#action1" className={style.link}> React Router</Nav.Link>
              <Nav.Link href="#action1" className={style.link}> React Props</Nav.Link>
              <Nav.Link href="#action2" className={style.link}>Redux</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className={style.section}>

        <div className={style.blocInt}>
          <div>   <h2 className={style.titre}><img src={codeReact} alt="code" className={style.code} />Qu'est-ce que React ? </h2>
            <p className={style.paragraphe}>React est une bibliothèque JavaScript libre développée par Facebook depuis
              2013. Le but principal de cette bibliothèque est de faciliter la création d'application
              web monopage, via la création de composants dépendant d'un état et générant une page HTML
              à chaque changement d'état.</p></div>
          <div>
            <video controls width="500">
              <source src={reactVidio} type="video/webm">
              </source>
            </video>
          </div>
        </div>

        <div className={style.blocInt}>
          <div>
            <h2 className={style.titre}>  Qu'est-ce qu'une application monopage ?</h2>
            <p className={style.paragraphe}>
              Les applications modernes ont tendance à adhérer à ce que l'on appelle un modèle d'application à page unique (SPA).

              Dans notre navigation quotidienne, nous ne chargeons jamais de pages entièrement nouvelles et différentes, même si nous rechargeons la page. Au lieu de cela, les différentes vues de votre application sont chargées et déchargées dynamiquement, écrites et réécrites dans la même page.

              Le composant App.js sera le point de départ de notre SPA. App.js est le composant principal.
              Une application web monopage est une application web
              accessible via une page web unique. Le but est d'éviter le chargement d'une nouvelle page à chaque
              action demandée, et de fluidifier ainsi l'expérience ..</p>
          </div>
          <div>
            <video controls width="400">
              <source src={singlepVidio} type="video/webm">
              </source>
            </video>
          </div>

        </div>
        <img src={spa} alt="spa" className={style.spa} />

        <div className={style.blocInt}>
          <div>   <h2 className={style.titre}>Pourquoi utiliser React ?
          </h2>
            <p className={style.paragraphe}> Souvent, dans les applications du monde réel, développer un site Web en utilisant HTML, CSS et JavaScript peut être très difficile et monotone. Voici pourquoi:

              Vous devez créer manuellement des fichiers HTML, CSS et JavaScript pour chaque page de site Web.
              Si vous souhaitez déplacer un élément qui existe dans la page A vers une autre page B, vous devrez copier tout son HTML, CSS et JavaScript pour le faire fonctionner et cela est non seulement fastidieux mais aussi chronophage.
              Le partage de CSS et de JavaScript peut rendre la maintenance très difficile à mesure que le site Web se développe.
              Afin de résoudre les problèmes évoqués précédemment, des bibliothèques et des frameworks ont heureusement vu le jour. Ils rendent le développement Web beaucoup plus facile et plus pratique pour les développeurs. L'une des principales solutions est React.js.

              Pourquoi choisir d'apprendre React.js ?
              La réponse à cette question est très simple, React est :

              Facile à apprendre.
              Hautement maintenable.
              Super-rapide dans les vues de rendu.
              Basé sur les composants, avec la possibilité de diviser le code autant que nous le voulons
              Simple dans le processus de débogage.<br />
              JSX : React utilise la syntaxe JSX dans l'écriture des composants, ce qui les rend plus indépendants.
              <br />
              Composant : React adopte l'approche d'application basée sur les composants qui nous permet d'utiliser le même composant à plusieurs reprises.
              <br />   Flux de données à sens unique : React nous permet uniquement de transmettre des données de parent à enfant, ce qui est très utile pour tracer les données lors du débogage.
              <br />
              DOM virtuel : React utilise le DOM virtuel qui rend le rendu de l'interface utilisateur super rapide.
              <br />
              Simplicité : React est très simple à apprendre et à utiliser, en particulier pour les nouveaux arrivants.
            </p></div>
          <div>
            <img src={utiliser} alt="utiliser" className={style.utiliser} />
          </div>
        </div>
        <h2 className={style.titre}>De quoi avons nous besoin?
        </h2>
        <p className={style.paragraphe}>Assurez-vous d'avoir déjà installé ces outils, au cas où ce ne serait pas le cas.

          Noeud JS
          Travailler avec npm (node ​​package manager) et certaines bibliothèques liées
          à React nécessite NodeJS. Vous pouvez le télécharger ici :
          <a href="https://nodejs.org/">https://nodejs.org/</a> .</p>
        <p className={style.paragraphe}>   1.Node JS</p>
        <img src={node} alt="node" className={style.node} />

        <p className={style.paragraphe}>   2.npx</p>
        <p className={style.paragraphe}>
          Maintenant, nous allons créer notre premier projet React.
          Les projets React nécessitent souvent quelques packages et une certaine configuration. Heureusement, il existe un package npm appelé create-react-app qui s'occupe de tout cela.
          Nous pouvons appeler ce package directement sans l'installer grâce à la commande npx.<br />
          Remarque : Remplacez le "my-project" par le nom de votre projet
        </p>
        <p className={style.paragraphe}>
          Maintenant, nous allons créer notre projet à l'aide de la commande create-react-app et npx.

          Voici les étapes à suivre :

          Créons un dossier pour les projets React. Vous pouvez choisir n'importe quel dossier vide.
          Accédez-y à l'aide de la ligne de commande/du terminal.<br />
          Exécutez la commande suivante pour créer le projet React :
          <span className={style.spanCom}>  npx create-react-app "my-project"</span> <br />

          Cette commande créera un sous-dossier nommé d'après le nom du projet que vous venez de spécifier.</p>
        <img src={npx} alt="node" className={style.node} />
        <h2 className={style.titre}>Start a project</h2>
        <p className={style.paragraphe}>
          Exécutons le projet et voyons à quoi ressemble notre application React. Nous devons d'abord :

          Accédez au sous-dossier créé par <p className={style.spanCom} >create-react-app </p>à l'aide de la ligne de commande/du terminal.
          Exécutez la commande suivante :
         Bureau> cd myfirstapp
          Bureau/myfirstapp> démarrage<p className={style.spanCom}>npm start </p>  Cette commande exécutera le script nommé « start » dans le package.json.</p>
        <h2 className={style.titre}>Le résultat:</h2>
        <img src={result} alt="resultat" className={style.result} />
        <p className={style.paragraphe}>La commande précédente ouvrira le navigateur contenant notre site Web React.

          Maintenant, essayez de jouer avec le code HTML qui se trouve dans le fichier App.js que vous pouvez trouver dans le dossier src.

          Assurez-vous d'avoir une sauvegarde du fichier App.js.</p>

        <div className={style.blocInt}>
          <div>
            <h2 className={style.titre}>La structuration du projet :</h2>
            <p className={style.paragraphe}>
              Vous vous demandez peut-être pourquoi le projet React contient beaucoup de dossiers et de fichiers.<br />
              Nous ne les passerons pas tous en revue, mais nous devons comprendre le but de certains d'entre eux.<br />
              Nous pouvons diviser ces fichiers en deux sections.<br />

              fichiers liés à npm

              <p className={style.spanCom}>node_modules</p>
              <p className={style.spanCom}>package.json</p>
              Réagissez les fichiers associés
              Publique
              src</p>
          </div>
          <div>
            <img src={res} alt="resultat" className={style.res} />
          </div>
        </div>

        <img src={npmreact} alt="node" className={style.node} />
        <p className={style.paragraphe}>Comme vous pouvez le voir, npm joue un rôle important dans notre projet React.
          Puisqu'il s'agit d'un gestionnaire de packages, il sera chargé d'installer tous les packages dont notre projet a besoin, notamment: <span className={style.spanCom}>React, ReactDOM et autres.</span>
          Lors de la création de l'application React, <span className={style.spanCom}> npm obtiendra tous ces packages à partir du registre npm.</span> Le registre contient tous les packages qui ont été publiés par les développeurs.</p>

        <h2 className={style.titre}>Package.json:</h2>
        <p className={style.paragraphe}> un fichier contient tous les noms des packages/dépendances que nous installons dans notre projet et leurs versions exactes.</p>
        <img src={dep} alt="resultat" className={style.res} />
        <div className={style.contor}>
          <div className={style.blocInt}>

            <div>
              <h2 className={style.titre}>virtual dom</h2>
              <p className={style.paragraphe}>Un DOM virtuel est une représentation JavaScript légère du modèle d'objet de
                document utilisé dans les frameworks Web déclaratifs tels que React, Vue.js et Elm. La mise à jour du DOM virtuel
                est relativement plus rapide que la mise à jour du DOM réel</p>
            </div>
            <div>
              <img src={vdom} alt="resultat" className={style.vdom} />
            </div>

          </div>

          <video controls width="500">
            <source src={vdomvidio} type="video/webm">
            </source>
          </video>

        </div>
      </section>





    </div>
  );
}

export default App;
