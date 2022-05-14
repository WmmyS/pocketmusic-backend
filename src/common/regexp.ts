export class Regexp {
  static regexpVideoTitle(title: string): string {
    const regExp1 = / - YouTube/gi;
    const regExp2 = /\"/gi;
    const regExp3 = /\)\(\]\[/gi;
    const regExp4 = /\"/gi;
    const regList = [regExp1, regExp2, regExp3, regExp4];
    regList.forEach((item) => (title = title.replace(item, '')));
    return title;
  }

  static regexpDuration(duration: string): string {
    const regExp1 = /PT/gi;
    const regExp2 = /M/gi;
    const regExp3 = /S/gi;
    const regList = [regExp1, regExp2, regExp3];
    regList.forEach((item) => {
      if (item === regExp2) {
        duration = duration.replace(item, ':');
        const math = duration.split(':');
        duration = `${this.insertZero(math[0])}:${this.insertZero(math[1])}`;
      } else {
        duration = duration.replace(item, '');
      }
    });
    return duration;
  }

  static insertZero(number: string) {
    const minutes: number = Number.parseInt(number);
    if (minutes < 10) {
      number = '0' + minutes.toString();
    }
    return number;
  }
}
