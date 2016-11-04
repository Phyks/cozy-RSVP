<template lang="pug">
  div
    h2 {{ 'My RSVPs' }}

    ul
      li
        button {{ 'New 15 mins meeting' }}
      li
        button {{ 'New 30 mins meeting' }}
      li
        button {{ 'New 60 mins meeting' }}
      li
        button {{ 'New meeting' }}

    ul
      li
        h2 {{ 'Tuesday, November 8, 2016' }}
        table
          tr
            td {{ '09:30am - 09:45am' }}
            td
              a(href='mailto:phyks@example.org') {{ 'Phyks' }}
              span {{ ' with you' }}
              br
              span {{ '(15 minutes)' }}
            td
              select
                option {{ 'Accept' }}
                option {{ 'Discard' }}
</template>
