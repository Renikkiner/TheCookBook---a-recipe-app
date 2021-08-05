import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    :root{
        --maxWidth: 1200px;
        --cream: #f4f1de;
        --red: #e07a5f;
        --blue: #3d405b;
        --green: #81b29a;
        --yellow: #f2cc8f;
        --white: #fff;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --size-radius: .5rem;
        --oswald: 'Oswald', sans-serif;
        --cardo: 'Cardo', serif;
        --extraWidth: 50vw;
        --shadow: 0 0 50px rgba(0, 0, 0, 0.315);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-size: 14px;
        color: var(--blue);
        position: relative;
        font-family: 'Cardo', serif;
        @media only screen and (max-width: 1200px){
            font-size: 80%;
        }
        @media only screen and (min-width: 1980px){
            font-size: 95%;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Oswald', sans-serif;
}
`

export default GlobalStyle
