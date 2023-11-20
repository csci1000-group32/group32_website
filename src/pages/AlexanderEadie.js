export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hey, I'm Alexander Eadie. </h1>
          </div>
          <img
            className='pic'
            src='https://i.postimg.cc/qvYHQS0h/IMG-1923.jpg'
            alt='alexander eadie'
          />

          <p className='description'>
            Hey my name is Alexander Eadie, and I'm a Computer Science major here at CU Boulder.
            I'm from a town right outside of Denver called Lakewood, so I'm never too far from home.
            I have a dog named Hampton, which you should be able to see, and a cat named Cricket.
            
            As far as my interests, I love running, skiing, and swimming, but I also enjoy video games, watching movies with friends, and obviously coding.
            I'm a member of the CU Robotics club but most of the time, I practice coding with my friend J on stuff like TryHackMe and OverTheWire.
            Down where I live I work as a lifeguard for the city, so if you're ever in the area during the summer,
            swing by one of the rec centers if you want and I might be there.

            If you need help with any of your CS, Physics, or Math problems I'd be happy to help, but other than that have a great day!
          </p>

          <img
            className='pic'
            src='https://i.postimg.cc/qvYHQS0h/IMG-1923.jpg'
            alt='alexander eadie'
          />

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
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
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