import * as React from "react";
import { Provider } from "react-redux";
import * as Store from "./state_management/store.js";
import * as ItemList from "./components/ItemList.js";
import * as CreateItem from "./components/CreateItem.js";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={Store.store}>
        <div className="App">

          <div className="hxRow">
            <div className="hxCol hxSpan-8">

              <hx-panel>
                <h2 className="list-header">Todo Items</h2>
                <hx-panelbody>
                  <ItemList.ConnectedItemList />
                </hx-panelbody>
                <hx-panelfoot>
                  <CreateItem.ConnectedCreateItem />
                </hx-panelfoot>
              </hx-panel>

            </div>
            <div className="hxCol hxSpan-4">
              <hx-panel>
                <hx-panelbody>

                  <table className="hxTable hxHoverable">
                    <tbody>
                      <tr>
                        <td>
                          864545<br/>
                          <small>The Amazing Company</small>
                        </td>
                        <td className="align-right">
                          $2,847.90<br/>
                          <small>Jan 7, 2018</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>Look around, look at what we have. Beauty is everywhere, you only have to look to see it. Just let your mind wander and enjoy. This should make you happy. The man who does the best job is the one who is happy at his job. La- da- da- da- dah. Just be happy.</p>

                  <p>If you don't think every day is a good day - try missing a few. You'll see. You can't have light without dark. You can't know happiness unless you've known sorrow. This is probably the greatest thing that's ever happened in my life. If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. When things happen - enjoy them. They're little gifts.</p>

                  <p>We don't want to set these clouds on fire. Happy painting, God bless. You can get away with a lot.</p>

                </hx-panelbody>
              </hx-panel>

            </div>
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;
