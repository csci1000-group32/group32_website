export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hi, I'm Gabrielle Partch. </h1>
          </div>
          <img
            className='pic'
            src='https://i.postimg.cc/6pQC3RGw/IMG-0520.jpg'
            alt='gabrielle partch'
          />

          <p className='description'>
                
            I'm from Glenwood Springs, CO, and I enjoy skiing, 
            backpacking, painting, sewing, and playing video games.
                
          </p>

          <img
            className='pic2'
            src='https://i.postimg.cc/L8MPXZ7d/IMG-0093.jpg'
            alt='gabrielle partch'
          />

            <p className='description2'>

            </p>

          <img
            className='pic3'
            src='https://i.postimg.cc/hG4fQFBg/IMG-9804.jpg'
            alt='gabrielle partch'
          />

                <p className='description3'>

            </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
            background: #cce6ff;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #ffffff;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
            margin: 1rem;
          }

          .pic {
            height: 504px;
            width: 672px;
          }
          .pic1 {
            margin: 1rem;
          }
          .pic2 {
            margin: 1rem;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 5px solid #004080;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #80bfff;
            border-color: #004d99;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}
