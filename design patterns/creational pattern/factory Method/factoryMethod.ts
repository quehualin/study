/**
 * 一种产品对应一个工厂
 *
 */
abstract class Log {
    writeLog(): void{}
}
abstract class LogFactory {
    createLog(): Log{
        return null;
    }
}

class DatabaseLog extends Log {
    writeLog(): void {
        console.log('write database log\n');
    }
}
class DatabaseLogFactory extends LogFactory {
   createLog(): Log {
       return new DatabaseLog();
   }
}

class FileLog extends Log {
    writeLog(): void {
        console.log('write file log\n');
    }
}
class FileLogFactory extends LogFactory {
   createLog(): Log {
       return new FileLog();
   }
}

function main(): number {
    let factory: LogFactory = new DatabaseLogFactory();
    let log: Log = factory.createLog();
    log.writeLog();
   return 1; 
}

