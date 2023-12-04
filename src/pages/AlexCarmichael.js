export default function examplePage() {
    return (
      <div className='container'>
        <title>Alex C</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Alex Carmichael</h1>
          </div>

          <p className='description'>
            Hi, I'm a freshman at CU Boulder studying Computer Science
          </p>
          <img
            className='pic'
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.colorado.edu%2Ftoday%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge%2Fpublic%2Fcallout%2Fcu_boulder_earlyam_aerial_ga.jpg%3Fitok%3DmtrOfHFM&f=1&nofb=1&ipt=7529739b461fd35e8ba6645fde2a2928b0073904c2d0f53eeb6080080e80bf7d&ipo=images'
            alt='CU Boulder Campus'
          />
          <p className='description'>
            I'm very excited to study CS here and can't wait to get real world experiences with programming through internships or jobs.
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
          }

          main {
            padding: 2rem 5rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #FFFDD0;
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
            background: #FFFFFF;
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
            font-family: Noto Sans, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}
