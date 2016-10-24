/**
 * Created by ridel1e on 22/10/2016.
 */

export default [
  '<form class="order-form">',
  '<span class="order-form__header">Shipping Info</span>',
    '<fieldset class="field-set order-form__field-set order-form__field-set_type_person">',
      '<legend class="field-set__legend">Recipient</legend>',
      '<input type="text" class="form-control order-form__form-control" placeholder="Full Name">',
      '<div class="order-form__form-group">',
        '<input type="text" class="form-control order-form__form-control order-form__form-control_name_phone" placeholder="Daytime Phone">',
        '<span class="notice order-form__notice">For delivery questions only</span>',
      '</div>',
    '</fieldset>',
    '<fieldset class="field-set order-form__field-set order-form__field-set_type_address">',
      '<legend class="field-set__legend">Address</legend>',
      '<input type="text" class="form-control order-form__form-control" placeholder="Street Address">',
      '<input type="text" class="form-control order-form__form-control" placeholder="Apt, Suite, Bldg, Gate Code. (optional)">',
      '<input type="text" class="form-control order-form__form-control order-form__form-control_name_city" placeholder="City">',
      '<div class="order-form__form-group order-form__form-group">',
        '<input type="text" class="form-control order-form__form-control order-form__form-control_name_country" placeholder="Country">',
        '<input type="text" class="form-control order-form__form-control order-form__form-control_name_ZIP" placeholder="ZIP">',
      '</div>',
    '</fieldset>',
    '<button type="button" class="button order-form__button">Continue</button>',
  '</form>'
].join('');