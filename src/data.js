import location from "./assets/location.svg";
import customs from "./assets/customs.svg";
import finish from "./assets/finish.svg";
import calendar from "./assets/calendar.svg";
import truck from "./assets/truck.svg";

export const data = {
  request: {
    id: "24",
    status: "Ожидает обработки",
  },
  fields: {
    loadPointAddress: {
      label: "Адрес места загрузки",
      value: "Нидерланды",
      name: "load-point-address",
      icon: location,
      isRequired: true,
    },
    customs: {
      label: "Таможня назначения",
      value: "СВХ Ренус Терминал",
      name: "customs",
      icon: customs,
      isRequired: false,
    },
    unloadPointAddress: {
      label: "Адрес места разгрузки",
      value: "г. Серпухов",
      name: "unload-point-address",
      icon: finish,
      isRequired: true,
    },
    estimatedTransportationDate: {
      label: "Предполагаемая дата перевозки",
      value: "25.10.2021",
      name: "estimated-transportation-date",
      icon: calendar,
      isRequired: false,
    },
    truckBodyType: {
      label: "Тип кузова",
      value: "90m3",
      name: "truck-body-type",
      icon: truck,
      isRequired: true,
      note: { volume: "90", loadCapacity: "22" },
    },
    deliveryConditions: {
      label: "Условия поставки",
      value: "FCA (Free Carrier)",
      name: "delivery-conditions",
      icon: null,
      isRequired: true,
    },
    comment: {
      label: "Комментарий",
      value:
        "Требования прежние: 22-23т, АДР 3 класс, без температурного режима.",
      name: "comment",
      icon: null,
      isRequired: true,
    },
  },
};
