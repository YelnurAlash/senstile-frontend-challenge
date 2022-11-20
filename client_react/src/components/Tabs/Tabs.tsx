import {useState} from 'react'
import './Tabs.scss';

const Tabs = () => {
    const [toggleState, setToggleState] = useState<number>(0);

    const toggleTab = (tabIndex: number): void => {
        setToggleState(tabIndex)
    }

    return (
        <div className="tabs-container">
            <div className="block-tabs">
                <button
                    className={toggleState === 0 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(0)}
                >Textiles</button>
                <button
                    className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(1)}
                >Rules</button>
                <button
                    className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(2)}
                >Supplies</button>
            </div>
            <div className="content-tabs">
            <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
            </div>
        </div>
    )
}

export default Tabs