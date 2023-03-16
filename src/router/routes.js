import VTodo from "@/components/VTodo.vue"
import TodoView from "@/components/TodoView.vue"

export const routes = [
  {
    path: '/',
    name: 'vtodo',
    component: VTodo,
  },
  {
    path: '/view/:todo',
    name: 'todo-view',
    component: TodoView,
  }
]