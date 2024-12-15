"use strict";

(() => {

  const getData = async url => {
    return fetch(url).then(response => response.json());
  }

  const generateUsersTable = todos => {
    const result = todos.reduce((acc, {userId, completed}) => {

      let existingObjectIndex = acc.findIndex(user => user.userId === userId);
      if(existingObjectIndex === -1) {
        acc.push({
          userId,
          completed: 0,
          incompleted: 0
        })
        existingObjectIndex = acc.findIndex(user => user.userId === userId);
      }


      acc[existingObjectIndex].completed += completed ? 1 : 0;

      // O(1) + O(1) = O(1)
      acc[existingObjectIndex].incompleted += completed ? 0 : 1
      return acc;
    }, []).map(({userId, completed, incompleted}) => `
          <tr>
            <td>${userId}</td>
            <td>${completed}</td>
            <td>${incompleted}</td>
          </tr>
      `)
      // O(n)
      .reduce((acc, current) => `${acc}${current}`, '')


    // O(1)
    console.log(result);

    // O(1)
    return result;
  }

  const generateStatsTable = todos => {
    const totalTodos = todos.length;
    const totalCompletedTodos = todos.filter(todo => todo.completed).length;
    const completeRatio = totalCompletedTodos/totalTodos * 100;
    return `
        <tr>
          <td>Total todos :</td>
          <td>${totalTodos}</td>
        </tr>

        <tr>
          <td>Total Completed todos :</td>
          <td>${totalCompletedTodos}</td>
        </tr>

        <tr>
          <td>Total Incomplete todos :</td>
          <td>${totalTodos - totalCompletedTodos}</td>
        </tr>

        <tr>
          <td>Complete Ratio :</td>
          <td>${completeRatio}%</td>
        </tr>
    `
  }

  const generateTodosTable = todos => {
    const newHTML = todos // ${completed ? "assets/images/check.png" : "assets/images/x.png"}
      .map(({userId, title, completed}) => `
          <tr>
            <td>${userId}</td>
            <td>${title}</td>
            <td>${completed ? "Yes" : "No"}</td>
          </tr>
      `)
      .reduce((acc, current) => `${acc}${current}`, '')
    return newHTML;
  }

  const renderTodosTable = newHTML => document.getElementById("todosContainer").innerHTML = newHTML;
  const renderStatsTable = newHTML => document.getElementById("todosStats").innerHTML = newHTML;
  const renderStatsTablePerUser = newHTML => document.getElementById("todosStatsPerUser").innerHTML = newHTML;

  document.getElementById("displayTodos").addEventListener("click", async () => {
    try {
      // Get data
      const todos = await getData("https://jsonplaceholder.typicode.com/todos");

      // Generate HTML
      const todosHTML = generateTodosTable(todos);
      const statsHTML = generateStatsTable(todos);
      const statsUserHTML = generateUsersTable(todos);

      // Render HTML
      renderTodosTable(todosHTML);
      renderStatsTable(statsHTML);
      renderStatsTablePerUser(statsUserHTML);
    } catch (error) {
      console.warn(error);
    }
  })

  // document.getElementById("displayTodosUser").addEventListener("click", async () => {
  //   try {
  //     const userId = +document.getElementById("userId").value;
      
  //     const todoPerUser = await getData(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  //     const statsPerUserHTML = generateStatsTable(todoPerUser);
  //     renderStatsTablePerUser(statsPerUserHTML);
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // });
})();