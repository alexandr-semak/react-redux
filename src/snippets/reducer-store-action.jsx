/* Обратите внимание, что использование .push() таким образом - не лучшее решение. Здесь она используется для простоты. В следующем разделе мы рассмотрим, почему. */

// Функция-редьюсер
var userReducer = function(state, action) {
  if (state === undefined) {
    state = [];
  }
  if (action.type === "ADD_USER") {
    state.push(action.user);
  }
  return state;
};

// Создание хранилища с передачей редьюсера
var store = Redux.createStore(userReducer);

/* Отправка первого экшена, чтобы выразить намерение изменить состояние */
store.dispatch({
  type: "ADD_USER",
  user: { name: "Dan" }
});
