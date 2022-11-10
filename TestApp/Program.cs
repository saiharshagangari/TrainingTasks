using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CustomMathLibrary;

namespace TestApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Maths math = new Maths();
            Console.WriteLine(math.sum(5, 2));

            Console.ReadKey();

        }
        ~Program()
        {
            Console.WriteLine("Destructor");
        }
    }
}
