let Helper = codecept_helper;

class CustomHelper extends Helper {

  async hover(selector) {
    let helper = this.helpers.TestCafe;

    await helper.t.hover(selector)
  }
}

module.exports = CustomHelper;