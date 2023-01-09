<template>
  <v-timeline align="start">
    <v-timeline-item
    v-for="(estudio, i) in Estudios"
    :key="i"
    dot-color="primary">
    <template v-slot:opposite>
      <div
      :class="`pt-1 headline font-weight-bold text-primary`"
      v-text="estudio.tituloEstudio"
      ></div>
      <div>2012-2018</div>
    </template>
    <div>
      <h2 :class="`mt-n1 headline font-weight-light mb-4 text-primary`" v-text="estudio.intitucion"></h2>
      <div v-text="estudio.info">
        
      </div>
    </div>
  </v-timeline-item>
</v-timeline>
</template>
<script>
export default {
  data: () => ({
    Estudios: [
    {
      intitucion:'Colegio Provincial kloketen',
      tituloEstudio: 'Bachillerato en sistema',
      info:'En el cual aprendí varios lenguajes con respecto al ámbito de información los cuales son Java, Html, Css, MYSQL.',
    },
    {
      intitucion:'Plan 111Mil',
      tituloEstudio: 'Trayecto Programador',
      info:'En este plan rendí Java(básico) y MYSQL(consultas) y también me dieron un título anexado que da el plan como aprobado.',
    },
    {
      intitucion:'UNTDF',
      tituloEstudio: ' Licenciaturas en Sistema',
      info:'Estoy realizando la carrera de Licenciatura en sistema y Analista Universitario en Sistema.',
    },
    ],
  }),
}
</script>