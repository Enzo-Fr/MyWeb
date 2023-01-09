<template>
  <v-timeline align="start">
    <v-timeline-item
    v-for="(experiencia, i) in Experiencias"
    :key="i"
    dot-color="primary">
    <template v-slot:opposite>
      <div
      :class="`pt-1 headline font-weight-bold text-primary`"
      v-text="experiencia.puesto"
      ></div>
      <div  v-text="experiencia.year"></div>
    </template>
    <div>
      <h2 :class="`mt-n1 headline font-weight-light mb-4 text-primary`" v-text="experiencia.lugarTrabajo"></h2>
      <div v-text="experiencia.info">
        
      </div>
    </div>
  </v-timeline-item>
</v-timeline>
</template>
<script>
export default {
  data: () => ({
    Experiencias: [
    {
      lugarTrabajo:'Feria de Ciencias',
      year:'Jun - 2018 / Dic - 2018',
      puesto: 'Programador y Diseñador Web',
      info:'Estuve desarrollando una página web para un proyecto llamado Dupai Tün de la feria de Ciencias cuyo proyecto está como Interés Provincial.',
    },
    {
      lugarTrabajo:'Newsan',
      puesto: 'Operario',
      year:'oct - 2020 / jun - 2021',
      info:'Estuve en el sector de celulares trabajando como operario, realizando diferentes procesos desde montaje de celulares hasta embalaje.',
    },
    {
      lugarTrabajo:'Centec',
      puesto: 'Técnico',
      year:'15 - may - 2022',
      info:'Estuve como técnico en las votaciones del 15 de mayo del 2022 , trabajando para el centec.',
    },
    ],
  }),
}
</script>