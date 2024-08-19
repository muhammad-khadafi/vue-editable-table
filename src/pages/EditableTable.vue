<template>
  <div>
    {{people}}
    <hr>
    <button type="button"  @click="addRow" class="add-row-btn" >Add Row</button>
    <Table>
      <template #thead>
        <TableHead>Names</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Contact</TableHead>
        <TableHead>Salary</TableHead>
      </template>

      <template #tbody>

          <PersonRow  v-for="(item, index) in people" :key="index" :person="item" @personupdated="handlePersonUpdate" />

      </template>
    </Table>
    <div class="total-salary">
      <strong>Total Salary:</strong> {{ totalSalary }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
import { EmittedValue, Person } from "../types/interfaces";
import {computed} from "@vue/runtime-core";

const Table = defineAsyncComponent(
  () => import(/*webpackChunkName:"table"*/ "../components/table/Table.vue")
);
const TableHead = defineAsyncComponent(
  () =>
    import(/*webpackChunkName:"tablehead"*/ "../components/table/TableHead.vue")
);

const PersonRow = defineAsyncComponent(() => import(/*webpackChunkName: "personrow"*/ '../components/PersonRow.vue'))

const totalSalary = computed(() => {
  const total = people.value.reduce((total, person) => {
    // Debug objek person dalam array people
    console.log("Current Person:", person);

    return total + person.salary;
  }, 0);

  // Debug nilai totalSalary
  console.log("Total Salary:", total);

  return total;
});

const people = ref<Person[]>([
  {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com",
    contact: "1111111111",
    salary: 2000000,
  },
  {
    id: 2,
    name: "John",
    email: "doe@example.com",
    contact: "1111111111",
    salary: 1000000,
  },
]);


function handlePersonUpdate(payload : EmittedValue) : void{
    people.value = people.value.map((item, index) => {
        if(item.id == payload.id)
        {
            // item[payload.key] = payload.value.toString()
          if (payload.key === 'salary') {
            item[payload.key] = Number(payload.value);
          } else {
            item[payload.key] = payload.value.toString();
          }
        }
        return item
    }

    )
}

function addRow() {
  const newId = people.value.length + 1;
  people.value.push({
    id: newId,
    name: " ",
    email: " ",
    contact: " ",
    salary: 0,
  });
}

</script>

<style scoped>
.add-row-btn {
  margin-bottom: 10px;
  border: 2px solid black;
  background-color: greenyellow;
  color: black;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
}

.total-salary {
  text-align: right;
  margin-top: 10px;
}
</style>
