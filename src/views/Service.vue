<template>
  <div>
    <section class="top-bar bgwhite">
      <div class="row">
        <div class="container">
          <div class="col-sm-6">
            <h5 class="text-left">Tasti noodle <span class="text-success">$200</span></h5>
            <p class="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="col-sm-6 actions">
            <div class="rating ml-3">8.0</div>
            <div class="reserve">Solicitar Presupuesto</div>
          </div>
        </div>
      </div>
    </section>
    <div class="container service-body">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <p class="parraf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem neque
              id veniam, adipisci officiis aperiam eos, fugiat ad aut dolores sit tempora incidunt laboriosam dolorum
              deserunt quaerat expedita. Dolorum eveniet, quasi cumque repudiandae ipsum hic quibusdam illo voluptas eos
              repellendus exercitationem, quam incidunt, dolores iure doloribus necessitatibus? Quidem, error.</p>
            <p class="parraf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem neque
              id veniam, adipisci officiis aperiam eos, fugiat ad aut dolores sit tempora incidunt laboriosam dolorum
              deserunt quaerat expedita. Dolorum eveniet, quasi cumque repudiandae ipsum hic quibusdam illo voluptas eos
              repellendus exercitationem, quam incidunt, dolores iure doloribus necessitatibus? Quidem, error.</p>

            <div class="service-categories row">
              <div v-for="i in 6" :key="i" class="col-md-4">
                <p>
                  <i class="fa fa-plus"></i>
                  Categoria {{i}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          Mapa
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
  .top-bar {
    padding: 20px 0;
  }

  .actions {
    display: flex;
    justify-content: flex-end;

    div {
      padding: 10px;
      border-radius: 3px;
      color: white;
    }

    .rating {
      background-color: #16e53e;
      margin-right: 10px;
    }

    .reserve {
      background-color: #ff3030;
    }
  }

  .service-body {
    margin-top: 20px;
    padding-top: 15px;
    .card{
      background-color: white;
      padding: 20px;
    }
    .parraf {
      text-align: left;
      margin-bottom: 20px;
    }
  }
</style>