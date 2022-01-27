import { RequestForm } from "./components/RequestForm";
import { data } from "./data";

const App = () => {
  return (
    <div className="app-container">
      <div className="request-info direction-column">
        <div className="request-header">
          <h3 className="request-title ">Запрос #{data.request.id}</h3>
          <p className="request-status">{data.request.status}</p>
        </div>
        <div className="box direction-column">
          <p className="request-note">
            Информация о точках маршрута, модели транспортного средства и другие
            сведения о перевозке.
          </p>

          <p className="footnote">
            Поля, помеченные <span className="asterisk">*</span>, являются
            обязательными для заполнения.
          </p>
        </div>
      </div>
      <div className="request-details">
        <RequestForm fields={data.fields} />
      </div>
    </div>
  );
};

export default App;
